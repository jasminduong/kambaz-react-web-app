import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "./Table";
import * as coursesClient from "../client";

export default function People() {
  const { cid } = useParams(); // Get course ID from URL
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchUsersForCourse = async () => {
      if (!cid) {
        setError("No course ID provided");
        setLoading(false);
        return;
      }
      
      console.log("=== PEOPLE: Fetching users for course ===");
      console.log("Course ID:", cid);
      
      try {
        setLoading(true);
        setError("");
        
        const courseUsers = await coursesClient.findUsersForCourse(cid);
        console.log("Users enrolled in course:", courseUsers);
        console.log("Number of users:", courseUsers.length);
        
        setUsers(courseUsers);
      } catch (error) {
        console.error("Error fetching course users:", error);
        setError("Failed to load users for this course");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsersForCourse();
  }, [cid]);
  
  if (loading) {
    return (
      <div className="text-center p-4">
        <div>Loading enrolled users...</div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  
  return (
    <div>
      <PeopleTable users={users} />
    </div>
  );
}