const db = require("../db/db.json");




module.exports = function(app) {
    app.get("/", function(req, res) {
      res.send(db);
    });
  
    app.post("../db/db.json", function(req, res) {
  
        let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text
      };
  
      fs.readFile("../db/db.json", "utf8", (err, data) => {
        if (err) throw err;
  
        const allNotes = JSON.parse(data);
  
        allNotes.push(newNote);
  
        fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), err => {
          if (err) throw err;
            res.send(db);
                  });
      });
    });
  
    app.delete("../db/db.json:id", (req, res) => {
  
      let noteId = req.params.id;
  
      fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
  
        const allNotes = JSON.parse(data);
        const newAllNotes = allNotes.filter(note => note.id != noteId);
  
        fs.writeFile("../db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
          if (err) throw err;
          res.send(db);
                  });
      });
    });
  };