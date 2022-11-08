import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-5xl my-12 font-semibold text-center'>Featured Blogs</h2>
            <div className='w-4/5 mx-auto mb-8'>
                <div className="card bg-base-100 shadow-2xl">
                    <div className='bg-blue-700 rounded text-white px-5 py-4'>
                        <h2 className="card-title">Difference between SQL and NoSQL.</h2>
                    </div>
                    <div className="card-body">
                        <p><b>SQL</b> is a <b>relational database management system</b>. It is a tabular database system where data is kept as <b>records in rows and tables</b>. SQL databases have fixed predefined schemas and are suited for <b>complex queries</b>. SQL is vertically scalable. Some examples are: <b>MySQL, PstgreSQL, Oracle,</b> etc. <br />
                        On the other hand, <b>NoSQL database</b> means <b>non-relational or distributed database system</b>. It is a non tabular database system and stores data in <b>collection and document style</b>. It is very flexible and doesn't require complex queries. NoSQL databases have <b>dynamic schema</b> and are best suited for <b>hierarchical data storage</b>. Also, NoSQL is <b>horizontally scalable</b>. Some NoSQL databases are <b>MongoDB, Mongoose,Neo4j,</b> etc.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-auto mb-8'>
                <div className="card bg-base-100 shadow-2xl">
                    <div className='bg-blue-700 rounded text-white px-5 py-4'>
                        <h2 className="card-title">What is JWT and how does it work?</h2>
                    </div>
                    <div className="card-body">
                        <p>
                            <b>JWT</b> is the acronym of <b>JSON WEB Token</b>. It is known as <b>'JOT'</b>. It is a standard for <b>transmitting information between websites and users</b>. It is an <b>authorization system</b>. A JWT basically contains 3 parts, these are <b>HEADER, PayLoad, and Signature</b>. JWT is a digitally signed permission for an user to access confidential data and change the data. Basically, JWT is applied in the login area. After the user logs in to the browser, then a request is sent to the server site and from there a token is sent to the browser containing information of the user and a secret code. The browser then stores the <b>JWT token</b> either in the <b>Browser HTTP cookies or in the LocalStorage</b>.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-auto mb-8'>
                <div className="card bg-base-100 shadow-2xl">
                    <div className='bg-blue-700 rounded text-white px-5 py-4'>
                        <h2 className="card-title">What is the difference between JavaScript and Node JS?</h2>
                    </div>
                    <div className="card-body">
                        <p>
                        <b>JavaScript</b> is a <b>high-level programming language</b> which is used for creating <b>websites</b>. JavaScript is based on <b>Oop</b>. It is used for writing scripts on the website. It only runs in the browser site. On the other hand, <b>Node JS</b> is a server site open source <b>JavaScript runtime</b> built on Google <b>V8 engine</b> and not a <b>programming language</b>. It is cross platform and single threaded. Node JS is capable of <b>asynchronous I/O</b> and has <b>event driven architecture</b>. JavaScript can be run outside the browser with the help of <b>Node JS</b>. Basically, it is used in server-site development.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-auto mb-8'>
                <div className="card bg-base-100 shadow-2xl">
                    <div className='bg-blue-700 rounded text-white px-5 py-4'>
                        <h2 className="card-title">How does Node JS handle multiple requests at the same time?</h2>
                    </div>
                    <div className="card-body">
                        <p>
                            We know that <b>Node JS</b> is single threaded . The single threaded approach fails when we need to perform lots of CPU calculations. Therefore, the Node JS has an <b>Event Queue</b> and where it places all the client requests. It is an event driven architecture and has its own event loop. The event loop receives the requests and processes the requests. It is the listener of the <b>Event Queue</b>. After executing one request the event queue passes the next. However, it is possible to execute multiple requests with the help of the <b>Node JS cluster</b>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;