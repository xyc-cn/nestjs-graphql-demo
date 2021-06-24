/* eslint-disable */
const express = require('express');
const app = express();
const port = 3003;

app.get('/feed/:id', (req, res) => {
 /* console.log('cookie is:' + req.headers.cookie);

  if (!req.headers.cookie || req.headers.cookie !== 'token=success_token') {
    res.send(
      JSON.stringify({
        code: -10000,
        data: null,
      }),
    );
    return;
  }*/

  if (req.params.id === '1') {
    res.send(
      JSON.stringify({
        code: 0,
        data: {
          id: '1',
          title: '文章一',
          content: '文章一的内容',
        },
      }),
    );
  } else if (req.params.id === '2') {
    res.send(
      JSON.stringify({
        code: 0,
        data: {
          id: '2',
          title: '文章二',
          content: '文章一的内容',
        },
      }),
    );
  } else {
    res.send(
      JSON.stringify({
        code: -1,
        data: null,
      }),
    );
  }
});

app.get('/comment/:id', (req, res) => {
  /* console.log('cookie is:' + req.headers.cookie);

   if (!req.headers.cookie || req.headers.cookie !== 'token=success_token') {
     res.send(
       JSON.stringify({
         code: -10000,
         data: null,
       }),
     );
     return;
   }*/

  if (req.params.id === '1') {
    res.send(
      JSON.stringify({
        code: 0,
        data: {
          id: '1',
          content: '评论内容一',
        },
      }),
    );
  } else if (req.params.id === '2') {
    res.send(
      JSON.stringify({
        code: 0,
        data: {
          id: '2',
          content: '评论内容二',
        },
      }),
    );
  } else {
    res.send(
      JSON.stringify({
        code: -1,
        data: null,
      }),
    );
  }
});


app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});
