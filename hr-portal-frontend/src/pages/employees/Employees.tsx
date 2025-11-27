import { useEffect, useState } from "react";
import { Layout } from "../../layout/Layout";
import { createEmployee, getEmployees} from '../../services/employeeService';
import type { Employee } from '../../services/employeeService';
import styles from "../../styles/Employees.module.css";

export const Employees = () => {
  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [form, setForm] = useState<Employee>({
    name: "",
    department: "",
    email: "",
    position: "",
    status: "active",
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createEmployee(form);
      setShowModal(false);
      await loadEmployees();
      setForm({
        name: "",
        department: "",
        email: "",
        position: "",
        status: "active",
      });
    } catch (err) {
      console.error("Error adding employee:", err);
    }
  };

  return (
    <Layout>
      <title>HR PORTAL - Employees</title>
      <h1 className={styles.title}>HR Portal - Employees</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Total Employees</h3>
          <p className={styles.number}>{employees.length}</p>
        </div>
      </div>

      {/* Search row */}
      <div className={styles.searchRow}>
        <input
          type="text"
          placeholder="Search employees..."
          className={styles.searchInput}
        />

        {/* Buttons */}
        <div className={styles.actionButtons}>
          <button className={styles.btn} onClick={() => setShowModal(true)}>
            Add Employee
          </button>
          <button className={styles.btn}>Export</button>
          <button className={styles.btn}>Filter</button>
          <button className={styles.buttonDanger}>Delete</button>
        </div>
      </div>

      {/* Employee Table */}
      <div className={styles.tableContainer}>
        <table className={styles.tables}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Position</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan={5}>No Employees Found</td>
              </tr>
            ) : (
              employees.map((emp, index) => (
                <tr key={emp._id ?? index}>
                  <td>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>{emp.email}</td>
                  <td>{emp.position}</td>
                  <td>{emp.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Add New Employee</h2>

            <form className={styles.modalForm} onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <label>Department:</label>
              <input
                type="text"
                required
                value={form.department}
                onChange={(e) =>
                  setForm({ ...form, department: e.target.value })
                }
              />

              <label>Email:</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <label>Position:</label>
              <input
                type="text"
                required
                value={form.position}
                onChange={(e) => setForm({ ...form, position: e.target.value })}
              />

              <label>Status:</label>
              <select
                value={form.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.value as "active" | "inactive" | "on leave",
                  })
                }
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="on leave">On Leave</option>
              </select>

              <div className={styles.modalActions}>
                <button type="submit" className={styles.btn}>
                  Submit
                </button>
                <button
                  type="button"
                  className={styles.buttonDanger}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};
