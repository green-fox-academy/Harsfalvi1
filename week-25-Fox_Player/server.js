const express = require("express");
const mysql = require("mysql2");

const port = 3000;
const app = express();

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "foxplayer",
});

conn.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connection established");
  }
});

app.use(express.json());

app.get("/api/playlists", (req, res) => {
  conn.query("SELECT * FROM playlists", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("DB error.");
      return;
    }
    res.send(rows);
  });
});

app.post("/api/playlists", (req, res) => {
  if (!req.body.title) {
    res.status(400).send("Missing title");
    return;
  }

  const query1 = `SELECT * FROM playlists WHERE title = ?`;
  const params = [req.body.title];

  conn.query(query1, params, (err1, rows) => {
    if (err1) {
      console.error(err1);
      res.status(500).send(err1.sqlMessage);
      return;
    }

    if (rows.length > 0) {
      res.status(400).send("Your title is already in use!");
      return;
    }

    const query2 = `
            INSERT INTO playlists (title)
            VALUES (?)
        `;

    conn.query(query2, params, (err2, result) => {
      if (err2) {
        console.error(err2);
        res.status(500).send("DB error.");
        return;
      }
      const data = {
        id: result.insertId,
        title: req.body.title,
      };
      res.status(201).send(data);
    });
  });
});

// DELETE /playlists/:id

// Deletes the given playlist
// if the id parameter is not present or not a number, return an error in JSON format. You might explain the error briefly.
// If the system_rank field is set to 1, you mustn't delete the playlist
app.delete("/api/playlists/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!id || isNaN(id)) {
    res.status(404).send("Not found");
    return;
  }

  const query1 = `SELECT system_rank FROM playlists WHERE playlist_id = ?`;
  const params = [id];

  conn.query(query1, params, (err1, rows) => {
    if (err1) {
      console.error(err1);
      res.status(500).send(err1.sqlMessage);
      return;
    }
    if (rows.length === 0) {
      res.status(404).send("Not found");
      return;
    }
    if (rows[0].system_rank === 1) {
      res.status(403).send("Unable to delete");
      return;
    }

    const query2 = `DELETE FROM playlists WHERE playlist_id = ?`;
    conn.query(query2, params, (err2) => {
      if (err2) {
        console.error(err2);
        res.status(500).send(err1.sqlMessage);
        return;
      }

      res.status(204).send();
    });
  });
});

app.get("/api/playlist-tracks", (req, res) => {
  const query = `SELECT * FROM tracks`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send(err.sqlMessage);
      return;
    }
    res.send(rows);
  });
});

app.get("/api/playlist-tracks/:playlist_id", (req, res) => {
  const params = [parseInt(req.params.playlist_id)];
  const query = `SELECT * FROM tracks
  JOIN playlists_tracks 
  ON tracks.track_id = playlists_tracks.tracks_id 
  WHERE playlists_tracks.playlists_id =?`;

  conn.query(query, params, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send(err.sqlMessage);
      return;
    }

    if (rows.length === 0) {
      res.status(404).send("Not found");
      return;
    }

    res.send(rows[0]);
  });
});

app.post("/api/playlist-tracks/:playlist_id", (req, res) => {
  const params = [parseInt(req.params.playlist_id), req.body.tracks_id];
  conn.query(
    "INSERT INTO playlists_tracks (playlists_id, tracks_id) VALUES (?, ?)",
    params,
    (err, result) => {
      console.log("result: " + result);
      if (err) {
        console.log(err);
        res.status(500).send("DB error.");
        return;
      }

      res.status(201).send("Succes");
    }
  );
});
app.delete("/api/playlist-tracks/:playlist_id/:track_id", (req, res) => {
  const playlistId = parseInt(req.params.playlist_id);
  const trackId = parseInt(req.params.playlist_id);

  if (!playlistId || isNaN(playlistId)) {
    res.status(404).send("Not found playlist id");
    return;
  }
  if (!trackId || isNaN(trackId)) {
    res.status(404).send("Not found track id");
    return;
  }

  const query = `DELETE FROM playlists_tracks WHERE playlists_id = ? AND tracks_id = ?`;
  const params = [playlistId, trackId];

  conn.query(query, params, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send(err.sqlMessage);
      return;
    }

    res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
