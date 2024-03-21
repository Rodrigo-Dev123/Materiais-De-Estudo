""" i = 0

while i < 1000000000:
    i += 1

print(i) """

from datetime import datetime

i = 0
start = datetime.now()

while i < 10000000000:
  i += 2
  print(i)

end = datetime.now()
delta = end - start
print(f'delta: {delta.total_seconds() * 1000} ms')