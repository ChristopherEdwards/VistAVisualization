. title: VistA Visualization

.. role:: usertype
    :class: usertype

===================
VistA Visualization
===================

This source tree contains a visualization of VistA packages. It is designed to
be an interactive web application that allows users to explore what packages
can be installed in a VistA instance.

-------
Purpose
-------

This tool aims to make the process of managing package registrations easier for
DBA's that are in charge of M namespace/numberspaces. Also, integrated into the
tool is a visualization tool to be able to explore all of the packages in the
database by category.

Eventually, this can be integrated with documentation, source code, and source
code visualization tools so it becomes the central repository for information
regarding VistA/RPMS/M packages.

--------------------
Installation/Running
--------------------

This application is built with `sails`_ and `node.js`_.

The `sails website`_ will instruct you on how to install the framework
and node.js on your machine. You can stop at creating a new sails project.

To run the server in development mode type:

.. parsed-literal::

    $ :usertype:`sails lift`

Server will run on http://localhost:1337

-----
Links
-----

* KRM Associates, Inc.: http://krminc.com

.. _`sails`: http://sailsjs.org/
.. _`node.js`: http://nodejs.org/
.. _`sails website`: http://sailsjs.org/#!documentation/new-to-nodejs