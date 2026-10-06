const db = require('../config/db');

const getAllExperiences = async () => {
  const [rows] = await db.query('SELECT * FROM experiences ORDER BY start_date DESC');
  return rows;
};

const getExperiencesById = async (id) => {
  const [rows] = await db.query('SELECT * FROM experiences WHERE id = ?', [id]);
  return rows[0];
};

const createExperiences = async (data) => {
  const { title, company, location, start_date, end_date, is_current, description } = data;
  
  const [result] = await db.query(
    `INSERT INTO experiences (title, company, location, start_date, end_date, is_current, description) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      title || null, 
      company || null, 
      location || null, 
      start_date || null, 
      end_date || null, 
      is_current ? 1 : 0, 
      description || null
    ]
  );
  return result;
};

const updateExperiences = async (id, data) => {
  const { title, company, location, start_date, end_date, is_current, description } = data;

  const [result] = await db.query(
    `UPDATE experiences SET title = ?, company = ?, location = ?, start_date = ?, end_date = ?, is_current = ?, description = ? WHERE id = ?`,
    [
      title || null,
      company || null,
      location || null,
      start_date || null,
      end_date || null,
      is_current ? 1 : 0,
      description || null,
      id
    ]
  );
  return result;
};

const deleteExperiences = async (id) => {
  const [result] = await db.query('DELETE FROM experiences WHERE id = ?', [id]);
  return result;
};

module.exports = { getAllExperiences, getExperiencesById, createExperiences, updateExperiences, deleteExperiences };