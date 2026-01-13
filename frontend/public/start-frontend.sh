#!/bin/bash

PORT=8000

echo ""
echo "🌐 Frontend is running!"
echo "────────────────────────────"
echo "🔗 http://localhost:$PORT"
echo "────────────────────────────"
echo ""

python3 -m http.server $PORT
