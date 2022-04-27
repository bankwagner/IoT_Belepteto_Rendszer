# Ipari IoT haladás

## kérdések:
    - Idei diasorok sok segítséget nyújtanának
    - OLED kijelző nem mutat képet

## struktúra
```dos
RFID olvasó ----> ESP32(1) ----> Azure IoT hub ----> ESP32(2) ----> OLED (számláló)
                                   |        |                 |
                                   |        |                 |
                                   ˇ NodeJS ^                 ----> LED (lámpa)
                                       |
                                       |
                                       ˇ
                                    fronted
```
1. Ha használják az RFID olvasót, az ESP32(1) felküldi az RFID tag-et az IoT Hub-ra
2. A backend-en a nodeJS tárolja hányan vannak a szobában
3. Az adatokat megjeleníti a frontenden
4. Ha a személyek száma változik, a backend kiszámolja az új létszámot, és leküldi az ESP32(2)-nek
5. ESP32(2) kijelzi az aktuális létszámot az OLED kijelzőn
6. Ha a létszám nulla, lekapcsolja a LED-et, ha több mint nulla, felkapcsolja.

## Eddig:
    - RFID olvasó működik
    - ESP32 <--> IoT hub kommunikációhoz megvannak a sablonok. 