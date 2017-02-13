var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
  title:'Article one | Satyendra Yadav',
  Heading:'Article One',
  date:'February 11,2017',
  content:  `<p>
            This is my first article with the help of IMAD . so the content of this article is described below as:
            </p>
            <p>
            Health is the level of functional and metabolic efficiency of a living organism. In humans it is the ability of individuals or communities to adapt and self-manage when facing physical, mental or social changes.
            </p>
            <p>
            The World Health Organization (WHO) defined health in its broader sense in its 1948 constitution as "a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity.
            </p>
            <p>
            This definition has been subject to controversy, in particular as lacking operational value, the ambiguity in developing cohesive health strategies, and because of the problem created by use of the word "complete".Other definitions have been proposed, among which a recent definition that correlates health and personal satisfaction. Classification systems such as the WHO Family of International Classifications, including the International Classification of Functioning, Disability and Health (ICF) and the International Classification of Diseases (ICD), are commonly used to define and measure the components of health.
            </p>`
};

function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`<html>
 <head>
     <title>
         ${title}
     </title>
     <meta name="viewport" content="width=device-width,initial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
 </head>
  <body>
     <div class="container">
       <div>
        <a href="/">Home</a>
       </div>
   <hr/>
    <h3>
        ${heading}
    </h3>
    <div>
        ${date}
    </div>
      <div>
        ${content}    
      </div>
    </div>
 </body>
 </html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
  res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
  res.send('Article two requeste and will be served here');
});

app.get('/article-three',function(req,res){
  res.send('Article three requeste and will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
