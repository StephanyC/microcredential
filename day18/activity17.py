'''
Stephany Canela
Tuesday Jan 31
Activity 17: Conditional Statements and Loops
'''
#example 1
print('---------Example 1----------')
age = int(input('Enter age:'))
if age >= 21:
    print('ADULT')
else:
    print('UNDER AGE!')
print('Age Check point!')

#example 2
print('----------Example 2: if elif....else------------')
grade=int(input('Enter grade:'))
if grade >= 90 and grade <= 100:
    print('GPA = A')
elif grade >= 80 and grade < 90:
    print('GPA = B')
elif grade >=70 and grade < 80:
    print("GPA = C")
elif grade >=60 and grade < 70:
    print('GPA = D')
elif grade >=0 and grade < 60:
    print('GPA = F')
else:
    print('INVALID!')

#example 3
print('---------if elif...else using or operator--------')
kidAge = int(input('Enter an age between 5 and 10:  '))
if kidAge == 5 or kidAge ==6:
    print('Eat pasta')
elif kidAge ==7 or kidAge ==8:
    print('Eat fish and veggies')
elif kidAge ==9 or kidAge ==10:
    print('Eat ice cream')
else:
    print('Wrong Age!')
