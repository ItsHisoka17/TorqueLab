echo "Enter Port:"
read port

pid=$(lsof -ti:$port)

kill $pid