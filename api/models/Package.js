/**
 * Package
 *
 * @module      :: Model
 * @description :: Represents a package
 * @docs		:: TODO
 */

module.exports = {

  "schema": true,

  "attributes": {

      "OfficialName":
      {
          "type": "string",
          "required": true
      },
      "AlternateName":
      {
          "type": "json"
      },
      // for when associations are done in sails for a strongly typed model
      //[
      //    {
      //        "Authority":
      //          {
      //              "type": "string"
      //          },
      //        "Name":
      //          {
      //              "type": "string"
      //          }
      //    }
      //],
      "PrimaryNamespace":
      {
          "type": "string",
          "required": true
      },
      "AdditionalNamespace":
          [
              {
                  "Namespace":
                  {
                      "type": "string"
                  }
              }
          ],
      "ExcludedNamespace":
          [
              {
                  "Namespace":
                  {
                      "type": "string"
                  }
              }
          ],
      "Numberspace":
      {
          "type": "json"
      },
      "Category":
      {
          "type": "string",
          "required": true
      },
      // for when associations are done in sails for a strongly typed model
      //[
      //    {
      //        "Start":
      //          {
      //              "type": "float"
      //          },
      //        "End":
      //          {
      //              "type": "float"
      //          }
      //    }
      //]

      toVisualization: function() {
          var obj = this.toObject();
          return obj.OfficialName;
      }

  }

};
