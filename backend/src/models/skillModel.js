const db = require('../config/db');

const getAllSkills = async () => {
  const [rows] = await db.query('SELECT * FROM skills');
  return rows;
};

const getSkillsById = async (id) => {
  const [rows] = await db.query('SELECT * FROM skills WHERE id = ?', [id]);
  return rows[0];
};

const createSkills = async (data) => {
  const { name, category, level } = data;
  const [result] = await db.query(
    'INSERT INTO skills (name, category, level) VALUES (?, ?, ?)',
    [name, category, level]
  );
  return result;
};

const updateSkills = async (id, data) => {
  const { name, category, level } = data;
  const [result] = await db.query(
    'UPDATE skills SET name = ?, category = ?, level = ? WHERE id = ?',
    [name, category, level, id]
  );
  return result;
};

const deleteSkills = async (id) => {
  const [result] = await db.query('DELETE FROM skills WHERE id = ?', [id]);
  return result;
};

module.exports = {
  getAllSkills,
  getSkillsById,
  createSkills,
  updateSkills,
  deleteSkills
};