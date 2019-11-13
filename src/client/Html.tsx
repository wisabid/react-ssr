/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
interface Props {
  body: string;
  title: string;
}
const Html = ({ body, title }:Props) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title> ${ title } </title>
    </head>
    <body style = "margin:0" >
      <div id = "app" > ${ body } </ div>
    </body>
  </html>
`;

export default Html;