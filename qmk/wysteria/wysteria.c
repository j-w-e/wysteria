/**
 * Copyright 2020 Christopher Courtney <drashna@live.com> (@drashna)
 * Copyright 2021 Quentin LEBASTARD <qlebastard@gmail.com>
 * Copyright 2022 Charly Delay <charly@codesink.dev> (@0xcharly)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Publicw License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
#include "quantum.h"

/**
 * LEDs index.
 *
 * ╭────────────────────╮                 ╭────────────────────╮
 *   17  12  11   6   5                     23  24  29  30  35
 * ├────────────────────┤                 ├────────────────────┤
 *   16  13  10   7   4                     22  25  28  31  34
 * ├────────────────────┤                 ├────────────────────┤
 *   15  14   9   8   3                     21  26  27  32  33
 * ╰────────────────────╯                 ╰────────────────────╯
 *                    2   1   0     18  19  20
 *                 ╰────────────╯ ╰────────────╯
 */

// clang-format off
#ifdef RGB_MATRIX_ENABLE
led_config_t g_led_config = { {
    /* Key Matrix to LED index. */
    // Left split - final column is thumb cluster
    // columns are: pinky, ring, middle, index, inner, thumb, in that order
    // for thumb col, top row is reachy thumb, bottom row is tucky thumb
    {      17,      12,      11,      6,     5,    0    }, // Top row
    {      16,      13,      10,      7,     4,    1    }, // Middle row
    {      15,      14,      9,       8,     3,    2    }, // Bottom row
    {     NO_LED, NO_LED,     NO_LED,     NO_LED, NO_LED, NO_LED }, // Necessary because I've hotwired the rotary to be it's own column
    // Right split - final column is thumb cluster
    // columns are: pinky, ring, middle, index, inner, thumb, in that order
    // for thumb col, top row is reachy thumb, bottom row is tucky thumb
    {     35,       30,     29,     24,    23,   18    }, // Top row
    {     34,       31,     28,     25,    22,   19    }, // Middle row
    {     33,       32,     27,     26,    21,   20    }, // Bottom row
    {     NO_LED, NO_LED,     NO_LED,     NO_LED, NO_LED, NO_LED }, // Necessary because I've hotwired the rotary to be it's own column
}, {
    /* LED index to physical position. */
    // Left split.
    /* index=0  */ {  99,  14 }, {  88,  24 }, {  76,  30 }, // thumb
    /* index=3  */ {  82,  48 }, {  82,  67 }, {  82,  86 }, // inner index
    /* index=6  */ {  70,  88 }, {  70,  69 }, {  70,  50 },
    /* index=9  */ {  58,  60 }, {  58,  79 }, {  58,  98 },
    /* index=12 */ {  46,  88 }, {  46,  69 }, {  46,  50 },
    /* index=15 */ {  33,  39 }, {  33,  58 }, {  20,  62 }, // pinky
    // Right split.
    /* index=18 */ { 125,  14 }, { 136,  24 }, { 148,  30 }, // thumb
    /* index=21 */ { 142,  48 }, { 142,  67 }, { 142,  86 }, // inner index
    /* index=24 */ { 154,  88 }, { 154,  69 }, { 154,  50 },
    /* index=27 */ { 166,  60 }, { 166,  79 }, { 166,  98 },
    /* index=30 */ { 178,  88 }, { 178,  69 }, { 178,  50 },
    /* index=33 */ { 191,  39 }, { 191,  58 }, { 191,  62 }, // pinky
}, {
    /* LED index to flag. */
    // Left split.
    /* index=0  */ LED_FLAG_MODIFIER, LED_FLAG_MODIFIER, LED_FLAG_MODIFIER, // thumb
    /* index=3  */ LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, // inner index
    /* index=6  */ LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT,
    /* index=9  */ LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT,
    /* index=12 */ LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT,
    /* index=15 */ LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, // pinky
    // Right split.
    /* index=18 */ LED_FLAG_MODIFIER, LED_FLAG_MODIFIER, LED_FLAG_MODIFIER, // thumb
    /* index=21 */ LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, // inner index
    /* index=24 */ LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT,
    /* index=27 */ LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT,
    /* index=30 */ LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT,
    /* index=33 */ LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, LED_FLAG_KEYLIGHT, // pinky
} };
#endif
// clang-format on
