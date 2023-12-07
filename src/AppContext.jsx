import { useState, createContext } from "react";

const subjects_default = [
  { id: "subject-id-1", name: "ქართული" },
  { id: "subject-id-2", name: "მათემატიკა" },
  { id: "subject-id-3", name: "ინგლისური" },
];

const weeks_default = [
  { id: "week-id-1", name: "პირველი კვირა" },
  { id: "week-id-2", name: "მეორე კვირა" },
  { id: "week-id-3", name: "მესამე კვირა" },
];

const weekDays_default = [
  { id: "first-day", name: "ორშაბათი" },
  { id: "second-day", name: "სამშაბათი" },
  { id: "third-day", name: "ოთხშაბათი" },
  { id: "fourth-day", name: "ხუთშაბათი" },
  { id: "fifth-day", name: "პარასკევი" },
];

export const AppContext = createContext({
  subjects: [],
  setSubjects: undefined,

  weeks: [],
  setWeeks: undefined,

  students: [],
  setStudents: undefined,

  points: [],
  setPoints: undefined,

  selectedSubject: "",
  setSelectedSubject: undefined,

  selectedWeek: "",
  setSelectedWeek: undefined,

  addedGrades: "",
  setAddedGrades: undefined,
});

export function AppProvider({ children }) {
  const [subjects, setSubjects] = useState(subjects_default);
  const [weeks, setWeeks] = useState(weeks_default);
  const [weekDays, setWeekDays] = useState(weekDays_default);
  const [points, setPoints] = useState([]);
  const [students, setStudents] = useState([]);
  const [getPoints, setGetPoints] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedWeek, setSelectedWeek] = useState("");

  const [addedGrades, setAddedGrades] = useState(false);
  const [currentWeek, setCurrentWeek] = useState([]);
  const [currentSubject, setCurrentSubject] = useState([]);
  const [currentPoints, setCurrentPoints] = useState([
    {
      id: "points-Id-1",
      StudentsId: students[0],
      weekId: currentWeek || "week-id-1",
      subjectId: currentSubject || "subject-id-1",
      points: getPoints,
    },
  ]);

  console.log(students);
  console.log(getPoints);
  console.log(currentPoints);
  console.log(currentWeek, "currentweasd");
  return (
    <AppContext.Provider
      value={{
        subjects,
        setSubjects,

        weeks,
        setWeeks,

        students,
        setStudents,

        points,
        setPoints,

        currentWeek,
        setCurrentWeek,

        currentSubject,
        setCurrentSubject,

        getPoints,
        setGetPoints,

        selectedSubject,
        setSelectedSubject,

        selectedWeek,
        setSelectedWeek,

        currentPoints,
        setCurrentPoints,

        weekDays,
        setWeekDays,

        addedGrades,
        setAddedGrades,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
