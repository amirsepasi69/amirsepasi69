/* Data Access Object (DAO) module for accessing tasks */
"use strict";

const sqlite = require("sqlite3");

const db = new sqlite.Database("./db/main.db", (err) => {
  db.get("PRAGMA foreign_keys = ON");
  if (err) {
    throw err;
  } else {
    console.log("Database connected Successfully!");
  }
});

//All Rest Operations for Study Groups

exports.getStudyGroups = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from studygroups";
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const studyGroupsList = rows.map((e) => {
        const studyGroupsJson = { id: e.id, name: e.name };
        return studyGroupsJson;
      });
      resolve(studyGroupsList);
    });
  });
};

exports.getOneStudyGroup = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from studygroups where id = (?)";
    db.all(sql, [id], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const studyGroupsList = rows.map((e) => {
        const studyGroupsJson = { id: e.id, name: e.name };
        return studyGroupsJson;
      });
      resolve(studyGroupsList);
    });
  });
};

exports.deleteStudyGroups = () => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM studygroups";
    db.run(sql, function (err) {
      if (err) {
        return console.error(err.message);
      }
      resolve();
    });
  });
};

exports.addStudyGroup = (name, sg_code) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO studygroups (name, sg_code) VALUES (?, ?)";
    db.run(sql, [name, sg_code], function (err) {
      if (err) {
        return console.error(err.message);
      }

      resolve(this.lastID);
    });
  });
};

exports.deleteOneStudyGroup = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM studygroups where id = (?)";
    db.run(sql, [id], function (err) {
      if (err) {
        return console.error(err.message);
      }
      resolve();
    });
  });
};

// All Rest Operations for Courses

exports.getCourses = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from courses";
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const coursesList = rows.map((e) => {
        const coursesListJson = {
          id: e.id,
          code: e.code,
          name: e.name,
          credits: e.credits,
        };
        return coursesListJson;
      });
      resolve(coursesList);
    });
  });
};

exports.getOneCourse = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from courses where id = (?)";
    db.all(sql, [id], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const coursesList = rows.map((e) => {
        const coursesListJson = { id: e.id, name: e.name };
        return coursesListJson;
      });
      resolve(coursesList);
    });
  });
};

exports.addCourse = (code, name, credits) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO courses (code, name, credits) VALUES (?, ?, ?)";
    db.run(sql, [code, name, credits], function (err) {
      if (err) {
        return console.error(err.message);
      }

      resolve(this.lastID);
    });
  });
};

exports.deleteAllCourses = () => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM courses";
    db.run(sql, function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log("Courses deleted");
      resolve();
    });
  });
};

exports.deleteOneCourse = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM courses where id = (?)";
    db.run(sql, [id], function (err) {
      if (err) {
        return console.error(err.message);
      }
      resolve();
    });
  });
};

// All REST Operations for Students

exports.getStudents = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from students";
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const studentsList = rows.map((e) => {
        const studentsListJson = {
          id: e.id,
          roll_no: e.roll_no,
          name: e.name,
          degree: e.degree,
          section: e.section,
          current_semester: e.current_semester,
        };
        return studentsListJson;
      });
      resolve(studentsList);
    });
  });
};

exports.getOneStudent = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from students where id = (?)";
    db.all(sql, [id], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const studentsList = rows.map((e) => {
        const studentsListJson = {
          id: e.id,
          roll_no: e.roll_no,
          name: e.name,
          degree: e.degree,
          section: e.section,
          current_semester: e.current_semester,
        };
        return studentsListJson;
      });
      resolve(studentsList);
    });
  });
};

exports.addStudent = (name, roll_no, degree, section, current_semester) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO students (name, roll_no, degree, section, current_semester) VALUES (?, ?, ?, ?, ?)";
    db.run(
      sql,
      [name, roll_no, degree, section, current_semester],
      function (err) {
        if (err) {
          return console.error(err.message);
        }

        resolve(this.lastID);
      }
    );
  });
};

exports.deleteAllStudents = () => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM students";
    db.run(sql, function (err) {
      if (err) {
        return console.error(err.message);
      }

      resolve();
    });
  });
};

exports.deleteOneStudent = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM students where id = (?)";
    db.run(sql, [id], function (err) {
      if (err) {
        return console.error(err.message);
      }
      resolve();
    });
  });
};

// All REST Operations for General Admins

exports.getGeneralAdmins = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from general_admins";
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const generalAdminsList = rows.map((e) => {
        const generalAdminsListJson = {
          id: e.id,
          name: e.name,
          general_admin_id: e.general_admin_id,
        };
        return generalAdminsListJson;
      });
      resolve(generalAdminsList);
    });
  });
};

exports.getGeneralAdmin = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from general_admins where id = (?)";
    db.all(sql, [id], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const generalAdminsList = rows.map((e) => {
        const generalAdminsListJson = {
          id: e.id,
          name: e.name,
          general_admin_id: e.general_admin_id,
        };
        return generalAdminsListJson;
      });
      resolve(generalAdminsList);
    });
  });
};

exports.addGeneralAdmin = (general_admin_id, name) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO general_admins (name, general_admin_id) VALUES (?, ?)";
    db.run(sql, [name, general_admin_id], function (err) {
      if (err) {
        return console.error(err.message);
      }

      resolve(this.lastID);
    });
  });
};

exports.deleteAllGeneralAdmins = () => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM general_admins";
    db.run(sql, function (err) {
      if (err) {
        return console.error(err.message);
      }
      resolve();
    });
  });
};

exports.deleteOneGeneralAdmin = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM general_admins where id = (?)";
    db.run(sql, [id], function (err) {
      if (err) {
        return console.error(err.message);
      }
      resolve();
    });
  });
};

//All REST Operations of Group Admins

exports.getGroupAdmins = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from group_admins";
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const groupAdminsList = rows.map((e) => {
        const groupAdminsListJson = {
          id: e.id,
          name: e.name,
          group_admin_id: e.group_admin_id,
        };
        return groupAdminsListJson;
      });
      resolve(groupAdminsList);
    });
  });
};

exports.getGroupAdmin = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from group_admins where id = (?)";
    db.all(sql, [id], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const groupAdminsList = rows.map((e) => {
        const groupAdminsListJson = {
          id: e.id,
          name: e.name,
          group_admin_id: e.group_admin_id,
        };
        return groupAdminsListJson;
      });
      resolve(groupAdminsList);
    });
  });
};

exports.addGroupAdmin = (name, group_admin_id) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO group_admins (name, group_admin_id) VALUES (?, ?)";
    db.run(sql, [name, group_admin_id], function (err) {
      if (err) {
        return console.error(err.message);
      }

      resolve(this.lastID);
    });
  });
};

exports.deleteAllGroupAdmins = () => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM group_admins";
    db.run(sql, function (err) {
      if (err) {
        return console.error(err.message);
      }
      resolve();
    });
  });
};

exports.deleteOneGroupAdmin = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM group_admins where id = (?)";
    db.run(sql, [id], function (err) {
      if (err) {
        return console.error(err.message);
      }
      resolve();
    });
  });
};

//All REST Operations for Meetings

exports.getMeetings = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from meetings";
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const meetingsList = rows.map((e) => {
        const meetingsListJson = {
          id: e.id,
          meeting_id: e.meeting_id,
          meeting_name: e.meeting_name,
          date: e.date,
          time: e.time,
        };
        return meetingsListJson;
      });
      resolve(meetingsList);
    });
  });
};

exports.getOneMeeting = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from meetings where id = (?)";
    db.all(sql, [id], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const meetingsList = rows.map((e) => {
        const meetingsListJson = {
          id: e.id,
          meeting_id: e.meeting_id,
          meeting_name: e.meeting_name,
          date: e.date,
          time: e.time,
        };
        return meetingsListJson;
      });
      resolve(meetingsList);
    });
  });
};

exports.addMeeting = (meeting_id, meeting_name, date, time) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO meetings (meeting_id, meeting_name, date, time) VALUES (?, ?, ?,?)";
    db.run(sql, [meeting_id, meeting_name, date, time], function (err) {
      if (err) {
        return console.error(err.message);
      }

      resolve(this.lastID);
    });
  });
};

exports.deleteAllMeetings = () => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM meetings";
    db.run(sql, function (err) {
      if (err) {
        return console.error(err.message);
      }

      console.log("Meetings deleted");
      resolve();
    });
  });
};

exports.deleteOneMeeting = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM meetings where id = (?)";
    db.run(sql, [id], function (err) {
      if (err) {
        return console.error(err.message);
      }

      resolve();
    });
  });
};
