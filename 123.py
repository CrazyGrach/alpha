import random
import time

def menu():
    print('\033[1;31mWelcome\n\033[1;33m«Казино Ракета»\n\033[1;32mНажмите "Enter" чтобы начать')
    input()
    game()

def game():
    diap1 = random.randint(100, 200)/100
    diap2 = random.randint(200, 300)/100
    diap3 = random.randint(300, 400) / 100
    diap4 = random.randint(400, 500) / 100
    diap5 = random.randint(500, 600) / 100
    diap6 = random.randint(600, 700) / 100
    diap7 = random.randint(700, 800) / 100
    diap8 = random.randint(800, 900) / 100
    diap9 = random.randint(900, 1000) / 100
    k = random.choices([diap1, diap2, diap3, diap4, diap5, diap6, diap7, diap8, diap9], weights=[0.7, 0.15, 0.05, 0.02, 0.015, 0.01, 0.005, 0.03, 0.02])
    print(k)
    l =1
    num = 1
    print(str(k))
    while num < int(k[0]):
        num += 0.01*l
        l+=1
        print(f'\033[1;35m{num}')
menu()
