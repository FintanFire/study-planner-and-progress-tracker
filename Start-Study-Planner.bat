@echo off
title Study Planner and Progress Tracker - Backend Server
cd /d "%~dp0"
echo Starting Study Planner SQLite Backend Server on http://localhost:8000 ...
start "" "http://localhost:8000"
python server.py
