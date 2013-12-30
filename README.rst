. title: VistA Visualization

===================
VistA Visualization
===================

This source tree contains a visualization of VistA packages. It is designed to
be an interactive web application that allows users to explore what packages
can be installed in a VistA instance.

-------
Purpose
-------

The current plan involves creating a database which contains all of the
registered VistA packages from anywhere including their namespace and
numberspace and associated metadata. The webapp will be driven by node.js and
a nosql database (probably an M/FileMan file at some point), currently a
mongodb is used.

--------------------
Installation/Running
--------------------

The pages are currently designed to be ran on a regular webserver. For convience
a minimal node server is included as server.js and requires connect to be
installed.

Webserver install:
Copy all files to the root of the webserver.

Node.js install:
Install node.js
npm install connect
Make sure you are in the root of this repository.
node server.js

Server will run on http://localhost:8080

-----
Links
-----

* KRM Associates, Inc.: http://krminc.com
