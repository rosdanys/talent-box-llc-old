
/* API KEY = re_LZGAqKTA_PhqU7BL52xZc7PUEmQ5S4dbF  */

import { Resend } from 'resend';

const resend = new Resend(import.meta.env.PUBLIC_APIKEY);

export default function SendEmail (data) {
    resend.emails.send({
        from: 'rosdanysramirez@gmail.com',
        to: 'rosdanys@gmail.com',
        subject: 'Prueba 00',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      });

}

