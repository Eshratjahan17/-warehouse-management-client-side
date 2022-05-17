import React from 'react';

const Blogs = () => {
  return (
    <div>
      <h1>Javascript Vs Nodejs</h1>
      <p>
        1.javascript is a programming language .Node js is a javascript run time
        environment 2.javascript can only run in browsers,on the otherhand
        javascripct can run outside browser with help of Nodejs. 3.javascript
        used in client side ,nodejs used in server-side.
      </p>
      <h1>when should use nodejs and when should use mongodb?</h1>
      <p>
        mongodb is a database system which stores data in more efficient wayand
        perform CRUD opreration like data updates,delete or search. Nodejs is a
        javascript engine that can be written any application with it.Nodejs
        runs javascript codes.so for this perpouse nodejs is used.
      </p>
      <h1>sql vs nosql</h1>
      <p>
        
            1.sql database have fixed or static architecture,Nosql have dynamic
            schema
            2.sql database are not suited for heirarchical data storage . No sql
            database are best suited for hierarchical data storage.
          
            3.sql is vertically scalable ,Nosql is Horizontally scalalable.
          
      </p>
    </div>
  );
};

export default Blogs;