import threading
import time
def fun():
    print("Thread is running")
def fun2():
    print("Thread 2 is running")
t1 = threading.Thread(target=fun)
t2 = threading.Thread(target=fun2)
t1.start()
time.sleep(4)
t2.start()
t2.join()
t1.join()

print("Main thread is running")