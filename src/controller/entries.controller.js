import Entry from '../models/entries.model.js';
import { getUserIdFromToken } from '../utils/getUserIdFromToken.js';

export const getAllEntries = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    const entries = await Entry.find({ userId });
    res.json(entries);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao buscar entradas', error });
  }
};

export const getEntryById = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar entrada', error });
  }
};

export const createEntry = async (req, res) => {
  try {
    const { date, category, title, value } = req.body;
    const userId = getUserIdFromToken(req);
    const newEntry = new Entry({ date, category, title, value, userId });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar entrada', error });
  }
};

export const updateEntry = async (req, res, ) => {
    console.log(req.body)
  try {
    const { date, category, title, value, } = req.body;
    const userId = getUserIdFromToken(req);
    const updatedEntry = await Entry.findByIdAndUpdate(
      req.params.id,
      { date, category, title, value, userId }
    );
    if (!updatedEntry) return res.status(404).json({ message: 'Entry not found' });
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar entrada', error });
  }
};

export const deleteEntry = async (req, res) => {
  try {
    const deletedEntry = await Entry.findByIdAndDelete(req.params.id);
    if (!deletedEntry) return res.status(404).json({ message: 'Entry not found' });
    res.json(deletedEntry);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar entrada', error });
  }
};
