<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- <link href="<?php echo $_images['favicon']; ?>" rel="shortcut icon" type="image/vnd.microsoft.icon" />
    <link rel="apple-touch-icon" href="<?php echo $_images['appleTouchIcon']; ?>" /> -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;subset=latin-ext" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <?php require(__DIR__ . '/cache/abWeb/header.html'); ?>

    <script type="text/javascript">
        window.addEventListener('load', () => { jsLibs.require('site').spk.init(true) });

        // window.addEventListener('load', () => {
        //     const abNodes = require('ab-nodes');

        //     let r = new abNodes.RootNode(document.getElementById('site'));

        //     let r1 = new abNodes.RepeatNode();
        //     let t1 = new abNodes.TextNode('R1');

        //     let r2 = new abNodes.RepeatNode();
        //     let t2 = new abNodes.TextNode('R2');
            
        //     r2.pChildren.add(t2);

        //     r1.pChildren.add(t1);
        //     r1.pChildren.add(r2);

        //     r.pChildren.add(r1);

        //     r.activate();

        //     r1.add(0);
        //     r1.add(1);

        //     let r2Copies = r2.pCopyable.getNodeCopies([ 0 ]);
        //     for (let i = 0; i < r2Copies.length; i++)
        //         r2Copies[i].add(0);

        //     // r2Copies = r2.pCopyable.getNodeCopies([ 1 ]);
        //     // for (let i = 0; i < r2Copies.length; i++)
        //     //     r2Copies[i].add(0);

        //     console.log('Done');
        // });
    </script>
</head>
<body id="site">
    <h1>Alternative Header</h1>
    <p>Some awesome alternative text.</p>
</body>
</html>
