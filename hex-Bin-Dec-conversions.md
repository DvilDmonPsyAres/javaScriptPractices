# In this exercise, translate the following values into the appropriate number base

# Binary to base 10_
_0b1010_
0*1=0
1*2=2
0*4=0
1*8=8
_result = 10_

_0b0011_
1*1=1
1*2=2
0*4=0
0*8=0
_result = 3_

# Binary to hexadecimal

_0b1010_
0*1=0
1*2=2
0*4=0
1*8=8
decimal = 10
_hexadecimal = A_

_0b0011_
1*1=1
1*2=2
0*4=0
0*8=0
decimal = 3_
_hexadecimal = 3_

# Hexadecimal to base 10

_0xa1_
1*1 = 1
10*16 = 160
_decimal = 161_

0xff
1*15 = 15
16* 15 = 240
_decimal = 255_


# Hexadecimal to binary

_0xa1_
A = 10
10 / 2 = %   0
5 / 2 = %    1
2 / 2 = %    0
if( % = 0) = 1
A = 1010
1 = 0001

_binary = ob10100001_

_0xff_
F = 15
15 / 2 = % 1
 7 / 2 = % 1
 3 / 2 = % 1
 1 / 2 = % 1
F = 15
15 / 2 = % 1
 7 / 2 = % 1
 3 / 2 = % 1
 1 / 2 = % 1

 _binary = 0b11111111_

# Base 10 to binary
_8_
 8 / 2  %  0
 4 / 2  %  0
 2 / 2  %  0
if( 000 && % 0) = 1

_binary 0b1000_

_24_
24 / 2 % 0
12 / 2 % 0
6 / 2 % 0
3 % 2 % 1
  %   = 1

_binary = 0b11000_

_255_
255 / 2 % 1
127 / 2 % 1
63 / 2 % 1
31 / 2 % 1
15 / 2 % 1
7 / 2 % 1
3 / 2 % 1
1 / 2  % 1

_binary = 0b11111111_


# Base 10 to hexadecimal

_8_
8 / 16  % 8
_hexadecimal = 0x8_

_24_
24 / 16 % 8
16 / 16 = 1

_HEXADECIMAL = 0X18_

_255_
255/16 % 15
15 / 16 % 15
_hexadecimal = 0XFF_

# Base 10 to ASCII
_65  = A_
_66 = B_
_97 = a_
_98 = b_

# Hexadecimal to ASCII
_0x41 = A_
_0x42 = B_
_0x61 = a_
_0x62 = b_

# Binary to ASCII
_0b01000001 = A_
_0b01000010 = B_
_0b01100001 = a_
_0b01100010 = b_
