// This is the index for the server side handling
// SSR Tutorial Additions
import React from "react";
import { renderToString } from "react-dom/server";
import App from './src/shared/App'
import routes from './src/shared/routes';
import express from "express";
import cors from "cors";
const fs = require('fs').promises;
const { StaticRouter, matchPath } = require("react-router-dom")

const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = "123" 
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY)


async function getIndex() {
  const index = await fs.readFile(__dirname + '/index.html', 'utf8');
  return index;
}

const app = express()
app.use(cors())
app.use(express.static("public"))

app.get("**", (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  console.log("About to get markup : SERVER")

    const markup = renderToString(
      <StaticRouter location={req.url}>
        <App redirect={req.url}/>
      </StaticRouter>
    )

    console.log(req.url)

    const index = getIndex().then(() => {
    const finalmarkup = index.replace('COOPNET----GOES----HERE', markup)
    })

    res.set('Cache-Control', 'public, max-age=200, s-maxage=500')
    res.send(finalmarkup)
});

export let CoopNet = functions.https.onRequest(app)

exports.firestoreEmail = functions.firestore
     .document('userData/{userId}')
     .onCreate(event => {

          const userId = event.id;

          const db = firebase.firestore()

          return db.collection('userData').doc(userId)
               .get()
               .then(doc => {
               
                    const user = doc.data()
                    
                    console.log("Sending email to " + user.first_name + " at " + user.email)

                    const msg = {
                         to: user.email,
                         from: 'Jinsu@housingcoop.net',
             
                         // custom templates
                         templateId: functions.config().sendgrid.template,
                         substitutionWrappers: ['{{', '}}'],

                         //TODO: Need to find a way to pass user's name into mail template
                         
                         // substitutions: {
                         //   name: toString(user.first_name)
                         //   // and other custom properties here
                         // }
                     };

                    return sgMail.send(msg)

               })
          
               .then(() => console.log('email sent!'))
               .catch(err => console.log(err))
          
     });