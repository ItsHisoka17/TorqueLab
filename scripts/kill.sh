echo "Enter Port:"
read port

pid=$(lsof -ti:$port)

kill -9 $pid