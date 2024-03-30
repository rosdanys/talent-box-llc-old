
/* API KEY = re_LZGAqKTA_PhqU7BL52xZc7PUEmQ5S4dbF  */

import { Resend } from 'resend';

const resend = new Resend('re_LZGAqKTA_PhqU7BL52xZc7PUEmQ5S4dbF');

export default function SendEmail (data) {
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'rosdanys@gmail.com',
        subject: 'Prueba 01',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      });

}

