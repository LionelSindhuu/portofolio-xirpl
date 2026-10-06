const skillModel = require('../models/skillModel');

const getAllSkills = async (req, res) => {
try {
    const skills = await skillModel.getAllSkills();
    res.status(200).json({ success: true, total: skills.length, data: skills });
} catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
}
};

const getSkillsById = async (req, res) => {
try {
    const { id } = req.params;
    const skill = await skillModel.getSkillsById(id);
    if (!skill) return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
    res.status(200).json({ success: true, data: skill });
} catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
}
};

const createSkills = async (req, res) => {
  try {
    const data = req.body;
    if (!data.name) return res.status(400).json({ success: false, message: 'Nama skill wajib diisi' });
    const result = await skillModel.createSkills(data);
    res.status(201).json({ success: true, message: 'Skill ditambahkan', data: { id: result.insertId } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

const updateSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!data.name) return res.status(400).json({ success: false, message: 'Nama skill wajib diisi' });

    const result = await skillModel.updateSkills(id, data);
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
    res.status(200).json({ success: true, message: 'Skill diperbarui' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

const deleteSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await skillModel.deleteSkills(id);
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
    res.status(200).json({ success: true, message: 'Skill dihapus' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

module.exports = { getAllSkills, getSkillsById, createSkills, updateSkills, deleteSkills };