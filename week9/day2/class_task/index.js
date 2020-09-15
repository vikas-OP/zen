const express = require("express");
const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());

let students = [
  {
    id: 1,
    name: "funny",
  },
  {
    id: 2,
    name: "vikas",
  },
  {
    id: 3,
    name: "tom",
  },
  {
    id: 4,
    name: "bob",
  },
];
let teachers = [
  {
    id: 1,
    name: "holt",
    students: [],
  },
  {
    id: 2,
    name: "terry",
    students: [],
  },
  {
    id: 3,
    name: "amy",
    students: [],
  },
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  let student = students.find((student) => student.id == req.params.id);
  if (student) {
    if (student.teach_id) {
      let teacher = teachers.find((teacher) => teacher.id == student.teach_id);
      res.json({
        ...student,
        teacher: {
          name: teacher.name,
        },
      });
    } else {
      res.json(student);
    }
  } else {
    res.status(404).send("not found");
  }
});

app.get("/teachers/:id", (req, res) => {
  let teacher = teachers.find((teacher) => teacher.id == req.params.id);
  if (teacher) {
    if (teacher.students.length == 0) {
      res.json(teacher);
    } else {
      let stud = [];
      teacher.students.forEach((id) => {
        let stude = students.find((student) => student.id == id);
        stud.push({ name: stude.name, id: stude.id });
      });
      res.json({
        ...teacher,
        students: stud,
      });
    }
  } else {
    res.status(401).send("bad request");
  }
});

app.get("/teachers", (req, res) => {
  res.json(teachers);
});

app.put("/students/teachers/:stud_id/:teach_id", (req, res) => {
  if (
    students.find((student) => student.id == req.params.stud_id) &&
    teachers.find((teacher) => teacher.id == req.params.teach_id)
  ) {
    let student = students.find((student) => student.id == req.params.stud_id);
    if (student.teach_id) {
      teachers.map((teach) => {
        if (teach.id == student.teach_id) {
          teach.students.splice(teach.students.indexOf(req.params.stud_id), 1);
        }
        return teach;
      });
    }
    students = students.map((student) => {
      if (student.id == req.params.stud_id) {
        student.teach_id = req.params.teach_id;
      }
      return student;
    });
    teachers = teachers.map((teacher) => {
      if (
        teacher.id == req.params.teach_id &&
        teacher.students.indexOf(req.params.stud_id) == -1
      ) {
        teacher.students.push(parseInt(req.params.stud_id));
      }
      return teacher;
    });
    res.json({
      message: "students and teachers data updated",
    });
  } else {
    res.status(401).send("bad request");
  }
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
