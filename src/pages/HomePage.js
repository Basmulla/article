/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line 
import React from 'react'

function HomePage() {
    return (
        <body>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div class='row'>
                <main id='primary' class='site-main'>
                    <section>
                        <div class='leftcolumn'>
                            <div class='card'>
                                <nav class='title'>
                                    <h2><center><strong>How to Create a Book Directory website Using a Rest API</strong></center></h2>
                                </nav>
                                <div>
                                    <left><p>Author: Basmulla Atekulla
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date: Friday June 17, 2022</p></left>
                                </div>
                                <div class='img'>
                                    <center>
                                        <img src='https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686461/retina_1708x683_cover-secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png' alt='title img' />
                                    </center>
                                </div>
                                <nav>
                                    <div>
                                        <p className='primary'>You want to start a Back-end project where you will learn the basics,
                                            such as building a rest API and learning how to store data in local server.</p>
                                    </div>
                                    <div>
                                        <p> You don't know what it is an easy, infromative project to start on and to exapnd your Web development
                                            knowlegde. </p>
                                    </div>
                                    <div>
                                        <p> Well, Building your own Book Directory app should be the right project for you. </p>
                                    </div>

                                    <div>
                                        <p> With this guide, you will learn how to create a server to store book data, how to create
                                            a react app to fetch the book data from the server you created using HTTP verbs and how to display
                                            the books on the react site.
                                        </p>
                                    </div>
                                    <div>
                                        <p> I will be walking through the development process I took to build my own Book Directory app, the
                                            challenges I faced, how I overcame them and the final product.
                                        </p>
                                    </div>
                                    <div>
                                        <p> Lets get right through it!</p>
                                    </div>
                                    <div>
                                        <h2> Development Process </h2>
                                    </div>
                                    <div>
                                        <h3> FrameWorks and Applications Used </h3>
                                    </div>
                                    <div>
                                        <p className='primary'> I used the code editor, VSCode to build all my code for the server
                                            and the React app.

                                            <p>For the server side(back-end), I used frameworks like Node.js to build and test
                                                the server to see if it can store all the book data I have.</p>

                                            <p> For the client side(front-end), I used frameworks like ReactJS to display the books, create
                                                the Home page and edit page for each book where you can edit, add or delete any data of the book. </p>
                                        </p>
                                    </div>
                                    <h3> Back-end Development Process </h3>
                                    <div>
                                        <p> Back-end Development was used to create the server to host the book data. </p>

                                        <p> In VS Code, I created a new folder called api-books and installed many dependencies such as express,
                                            body parser and more. </p>
                                        &nbsp;
                                        <left><img src={process.env.PUBLIC_URL + "/images/Back-end Folder.png"} alt='back-end' style={{ width: '35%', height: 'auto' }} /></left>&nbsp;<img src={process.env.PUBLIC_URL + "/images/dependencies.png"} alt='dependencies' style={{ width: '50%', height: 'auto' }} />
                                        <br />
                                        <p>Then created an index.js file and created variables to use dependencies such as
                                            express, body parser, cors and other depedencies. </p>

                                        <p> Then created a variable called app and it uses express. </p>

                                        <p>A port variable is made to host your server on. I used process.env.PORT because when using Heroku, you need to
                                            use environment variables.
                                        </p>

                                        <p>So, I created a .env file which has a PORT variable which is set to 5000. This means that the server will be hosted
                                            on localhost:5000.
                                        </p>
                                        &nbsp;
                                        <left><img src={process.env.PUBLIC_URL + "/images/env.png"} alt='back-end' style={{ width: '50%', height: 'auto' }} /></left>
                                        <br />
                                        <p>Then within the app variable, I created properties that used dependencies such as the api dependency
                                            and cors, which is a resource sharing dependecy which allows the other sites fetch the data and allows
                                            other sites to host the server as well such as Heroku which I will get to later. </p>

                                        <p>Then I created a new property which used express.static, which is a function which allows to serve static
                                            files using static-server. </p>

                                        <p>In the function, it checks if the production of the server is completed or not, and when completed, the
                                            app will get the api and then send a response on the console saying that it was a success.
                                        </p>
                                        <p>The last thing to add for the index.js file is add a listen property to the app variable, which will take
                                            in the port variable and then once the port is on, in the console there will be a sresponse that states
                                            app listening on port 5000.</p>
                                        <p>This is how your index.js file should look like.</p>
                                        &nbsp;&nbsp;<left><img src={process.env.PUBLIC_URL + "/images/index.png"} alt='back-end' style={{ width: '80%', height: 'auto' }} /></left>
                                        <br />
                                        <p>After you completed the index.js file, create a new file and name it book data.js file. </p>
                                        <p>This file will have all the book data, which will then be on the server for the react website to fetch and use.</p>
                                        <p>To use the same book data as I used, you can click on this <a href='https://github.com/Basmulla/api-books/blob/master/book%20data.js'> link </a>
                                            and it will take you to my github code with all the book data which you can copy and paste into your file. </p>
                                        <p>This is how the book data.js file will look like.</p>
                                        &nbsp;&nbsp;<left><img src={process.env.PUBLIC_URL + "/images/book data.png"} alt='back-end' style={{ width: '80%', height: 'auto' }} /></left>
                                        <br />
                                        <p>After you completed the book data.js file, create a new file and name it api.js file. </p>
                                        <p>Here you are going to use the HTTP verbs such as GET, POST, PUT and DELETE to fetch data from the server
                                            use it in your app to edit the book data, add new information or delete the whole book.
                                        </p>
                                        <p>You are going to start off with creating a variable called router and the router variable uses express and
                                            the .Router function which will make the url of the server into a function.
                                        </p>
                                        <p> Then create a books variable which will use the book data.js file. </p>
                                        <p> Lastly, create a booksDirectory variable which will uses the book variable.</p>
                                        <p>After you created all the variables, use the router variable and the GET HTTP
                                            verb to fetch the data from the book data.js file, with the route being /books.</p>
                                        <p>Then using the same router variable and HTTP verb of GET, change the route to /books/:id. This is
                                            because each book has its own seperate id and when you click on any book, that id of the book will show.
                                        </p>
                                        <p>This time in the function, you are going to declare if as paramaters and you are going to find the book by
                                            checking its id.
                                        </p>
                                        <p>If the book does not exist, then you are going to write a response to the console saying that the book does
                                            not exist.
                                        </p>
                                        <p>Then you are going to use the router variable again and this time, you are going to use the POST HTTP verb,
                                            which will fetch the book data and display it on the server. </p>
                                        <p>In the function, your are going to create a const variable which includes title, long and short decsiption,
                                            page number, author and more. This const variable will be a request property.
                                        </p>
                                        <p>Then you are going to create a new const variable called bookExist which will check to see if the book exists
                                            by checking the isbn of the book, which is the book number.
                                        </p>
                                        <p>If the book exists, then you will create a response to the console that will say that the book exists.</p>
                                        <p>To make your life easier, create a new const variable called book which will include all the information like title, isbn,
                                            short and long description, page number and more.</p>
                                        <p>So when you call on the variable book, you are calling on the other book data.</p>
                                        <p>Then using the booksDirectory variable, and the push method, push the book variable which will send all the information
                                            to the server.
                                        </p>
                                        <p>After, create a variable called updatedBook which will use the book variable and update all the fields in the book
                                            variable such as title, isbn, page number and more.
                                        </p>
                                        <p>Lastly, use the router variable and the DELETE HTTP verb to make a fucntion where you can delete the book and all of its
                                            data.
                                        </p>
                                        <p>It will have response statement that will say book does not exist when it couldn't find the id of the book and a response statement
                                            that will say success when the book deletes.
                                        </p>
                                        <p>To end of the file, declare modules.exports = router because module.exports is where all the book data is and once it is declared as router,
                                            it means that everytime we use the router variable, we are using the module.exports with all the bookk data.
                                        </p>
                                        <p>Here is how the api.js file will look like.</p>
                                        &nbsp;
                                        <left><img src={process.env.PUBLIC_URL + "/images/api 1.png"} alt='back-end' style={{ width: '45%', height: 'auto' }} /></left>&nbsp;<img src={process.env.PUBLIC_URL + "/images/api 2.png"} alt='back-end' style={{ width: '43%', height: 'auto' }} /><img src={process.env.PUBLIC_URL + "/images/api 3.png"} alt='back-end' style={{ width: '45%', height: 'auto' }} />&nbsp;<img src={process.env.PUBLIC_URL + "/images/api 4.png"} alt='back-end' style={{ width: '45%', height: 'auto' }} />
                                        <br />
                                    </div>
                                    <div>
                                        <h3>Front-end Development Process</h3>
                                    </div>
                                    <div>
                                        <p>Front-end Development is used to create the react website where the books would be displayed. </p>
                                    </div>
                                    <div>
                                        <p>What you want to do first is to open up your terminal and write npx create-react-app folder-name,
                                            where the folder name can be anything you want. My folder name is book directory
                                        </p>
                                    </div>
                                    <div>
                                        <p>So that would like npx create-react-app book-directory in the terminal.</p>
                                    </div>
                                    <div>
                                        <p>Once the react app is created, write cd folder-name in the terminal to go in the directory where you are
                                            going to write all your code.
                                        </p>
                                    </div>
                                    <div>
                                        <p>Then in the terminal, you are going install dependencies such as redux, redux-thunk, axios, final-form,
                                            react-router-dom and many other dependencies.
                                        </p>
                                    </div>
                                    <div>
                                        <p>All of these dependencies will help you build the layout of the website and to fetch the data from the API server.</p>
                                    </div>
                                    <div>
                                        <p>This is how your package.json dependencies should look like.</p>
                                    </div>
                                    &nbsp;
                                    <left><img src={process.env.PUBLIC_URL + "/images/package json.png"} alt='package json' style={{ width: '45%', height: 'auto' }} /></left>
                                    <br />
                                    <div>
                                        <p> As seen above, in your src folder, create new folders called componenets, containers and forms. </p>
                                    </div>
                                    <div>
                                        <p>As well as creating new folders, create new files called reducer.js and store.js in the src folder.</p>
                                    </div>
                                    <div>
                                        <p>The store.js file will be used to store all the book data retieved from the server and the reducer.js file will be
                                            used to determine the neccessary changes the state of the book data will go throug. It takes in the action made by
                                            the site and decideds whether to update, delete or add the book data. </p>
                                    </div>
                                    <div>
                                        <p>This is how the store and reducer.js files will look like.</p>
                                    </div>
                                    &nbsp;
                                    <left><img src={process.env.PUBLIC_URL + "/images/store.png"} alt='store' style={{ width: '50.7%', height: 'auto' }} /></left>&nbsp;<img src={process.env.PUBLIC_URL + "/images/reducer.png"} alt='reducer' style={{ width: '42%', height: 'auto' }} />
                                    <br />
                                    <div>
                                        <p>After go in to your containers folder and create two sub folders called HomePage and EditHomePage. Here you are going to
                                            create the home page where all the books are going to be displayed and the edit page where you will the options to change or delete the title,
                                            short and long description, page number, authors and more of the book. </p>
                                    </div>
                                    <div>
                                        <p>In each folder, create two files and name them either HomePage.js or EditBookPage.js and the next file,
                                            HomePage.duck.js or EditBookPage.duck.js.
                                        </p>
                                    </div>
                                    <div>
                                        <p>The duck files is where it delcares what reducers are dealing with what actions and where the actions
                                            also orginate from. The duck files create an easy pattern for import/exports in your files. Lastly,
                                            the duck files act as a mini app for the each component of the app, like the home and edit page, where it
                                            contains the actions, types and reducers that the component will use. </p >
                                    </div>
                                    <div>
                                        <p>Here is the duck files for the EditBookPage.</p>
                                    </div>
                                    &nbsp;
                                    <left><img src={process.env.PUBLIC_URL + "/images/editbookpage 1.png"} alt='editbookpage 1' style={{ width: '47%', height: 'auto' }} /></left>&nbsp;<img src={process.env.PUBLIC_URL + "/images/editbookpage 2.png"} alt='editbookpage 2' style={{ width: '45%', height: 'auto' }} /><img src={process.env.PUBLIC_URL + "/images/editbookpage 3.png"} alt='editbookpage 3' style={{ width: '47%', height: 'auto' }} />
                                    <br />
                                    <div>
                                        <p>Here is the duck files for the HomeBookPage.</p>
                                    </div>
                                    &nbsp;
                                    <left><img src={process.env.PUBLIC_URL + "/images/homepage 1.png"} alt='homepage 1' style={{ width: '50%', height: 'auto' }} /></left>&nbsp;<img src={process.env.PUBLIC_URL + "/images/homepage 2.png"} alt='homepage 2' style={{ width: '47%', height: 'auto' }} />
                                    <br />
                                    <div>
                                        <p>After the duck files are created, then the HomePage and EditBookPage.js files are to be created and I am not going 
                                            to get into that. If you want to access the HomePage and EditBookPage, as well as the other folders like the componenets
                                            and forms, then click on this <a href='https://github.com/Basmulla/api-books/blob/master/book%20data.js'> link </a>.</p>
                                    </div>
                                    <div>
                                        <h3>Hosting your API server</h3>
                                    </div>
                                    <div>
                                        <p>Once you completed both the Front and Back-end development, you want to host you API server on a website so that 
                                            it can be accessed by everyone and not only locally for you.
                                        </p>
                                    </div>
                                    <div>
                                        <p>The website I choose was Heroku but you can choose whatever website you like. </p>
                                    </div>
                                    <div>
                                        <p>What you want to do first is to create an account on Heroku and once you logged in, go to the dashboard and click on 
                                            New and then on create new app. Name your new app whatever you like. I named it book-directory-rest-api.
                                        </p>
                                    </div>
                                    <div>
                                        <p>Once you are in the dashboard off your app, click on Deploy. Once on Deploy, got to deployment method and choose
                                            Github. When Github is choosen, choose the repository your back-end code is situated in. 
                                        </p>
                                    </div>
                                    <div>
                                        Enable automatic deploys from the master branch and then click on deploy brach at the end of the page. This will create 
                                        the website to host your API server. 
                                    </div>
                                    &nbsp;

                                    <br />
                                    <div>
                                        <p> I had difficulty at first deploying the heroku app with the API because I didn't had cors installed and didn't use it 
                                            in the index.js file in the rest API. I also didn't had an .env file to store all of my environment variables.
                                            But after looking thorugh StackOverFlow forums, I was able to resolve the issue and got to deploy the app.
                                        </p>
                                    </div>
                                    <div>
                                        <p>You are not going to have any difficulty deploying the book directory app because everything is already in the
                                            github repository I shared above.
                                        </p>
                                    </div>
                                    <div>
                                        <p>Once the Heroku app is deployed and works, you just need to deploy the react website as a github
                                            page. A tutorial video can be found here on this <a href='https://www.youtube.com/watch?v=F8s4Ng-re0E&t=642s'> link </a> which I highly recommend.</p>
                                    </div>
                                    <div>
                                        <h3>Completed Project</h3>
                                    </div>
                                    <div>
                                        <p>Congratulations!</p>
                                    </div>
                                    <div>
                                        <p>You have completed this guide on how to create a book directory website using a rest API and have experience
                                            working with nodeJS, ReactJS and Hosting services such as Heroku.
                                        </p>
                                    </div>
                                    <footer> @ 2022 My Site </footer>
                                </nav>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class='rightcolumn'>
                            <div class='card'>
                                <h2><center> Other Projects <i class="fa fa-fw fa-file"></i></center></h2>
                            </div>
                            <div class='card'>
                                <h2><center> Calculator App </center></h2>
                                <img src={process.env.PUBLIC_URL + "/images/Calculator app.png"} alt='calc app' style={{ width: '100%', height: 'auto' }} />
                                <p>This project was created using HTML, CSS and JavaScript. It has many functions
                                    such as Multiplication, Division, Addition, Subtraction and Sqaure Root. It does not
                                    have the same functions as those of a scientific calculator.
                                </p>
                                <p>The link to the project is ...</p>
                                <a href='https://basmulla.github.io/calculate-app/'>Calculator app</a>
                            </div>
                            <div class='card'>
                                <div class='app'>
                                    <h2><center> Todo-List App </center></h2>
                                    <img src={process.env.PUBLIC_URL + "/images/todo-list.png"} alt='todo-list app' style={{ width: "100%", height: 'auto' }} />
                                    <p>This project was created using HTML, CSS, JavaScript and ReactJS. With the Todo-list app, you can add
                                        taks to remind of events that will occur in the near future. You can delete or highlight them to know
                                        which is task is more important than the other task. </p>
                                    <p>The link to the project is ...</p>
                                    <a href='https://basmulla.github.io/todo-list/'>Todo-list app</a>
                                </div>
                            </div>
                            <div class='card'>
                                <h2><center> Personal Website </center></h2>
                                <img src={process.env.PUBLIC_URL + "/images/website.png"} alt='website pic' style={{ width: "100%", height: 'auto' }} />
                                <p> This projected was created using HTML, CSS, JavaScript and React JS. This is my own
                                    personal portfolio, that displays the projects I have created in Web Development. It has many tabs and
                                    is more functional than any other of my projects. It has a search engine, that I created by creating a database
                                    of links such as Google, Youtube, GitHub and more. It also has a sign up form, where you fill out a form and when you
                                    complete the form, it transfers the user data to a database I have created in Firestore.
                                </p>
                                <p>The link to the website is ...</p>
                                <a href='https://basmulla.github.io/Website/#/Home'>Personal Website</a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </body >
    );
}

export default HomePage;