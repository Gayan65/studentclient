import React, { useEffect, useState } from "react";

const StudentList = () => {
    //states
    const [students, setStudents] = useState([]);

    //page loads..
    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8080/student/getAll"
                );

                const json = await response.json();

                if (response.ok) {
                    setStudents(json);
                }
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };

        fetchAllStudents();
        console.log(students);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log("Students loaded:", students);
    }, [students]);
    return <div></div>;
};

export default StudentList;
