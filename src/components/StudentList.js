import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import Loader from "./Loader";

const StudentList = () => {
    //states
    const [students, setStudents] = useState([]);
    const [loader, setLoader] = useState(null);

    //page loads..
    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                setLoader(true);
                const response = await fetch("/student/getAll");

                const json = await response.json();

                if (response.ok) {
                    setLoader(false);
                    setStudents(json);
                }
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };

        fetchAllStudents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log("Students loaded:", students);
    }, [students]);
    return (
        <div>
            {students &&
                students.map((student) => (
                    <StudentCard
                        key={student.id}
                        name={student.name}
                        address={student.address}
                    />
                ))}
            {loader && <Loader />}
        </div>
    );
};

export default StudentList;
