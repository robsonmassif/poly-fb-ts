import random

def generate_rgb(len):
  '''
  Generates a bunch
  :param len: length of things
  :return:
  '''
  for i in range(len):
    print '{R: ', random.randint(0, 255), ", G: ", random.randint(0,255), ", B: ", random.randint(0,255) , "},"

if __name__ == '__main__':
  generate_rgb(50)