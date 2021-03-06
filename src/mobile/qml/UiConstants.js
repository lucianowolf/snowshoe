.pragma library

/****************************************************************************
 *   Copyright (C) 2012  Instituto Nokia de Tecnologia (INdT)               *
 *                                                                          *
 *   This file may be used under the terms of the GNU Lesser                *
 *   General Public License version 2.1 as published by the Free Software   *
 *   Foundation and appearing in the file LICENSE.LGPL included in the      *
 *   packaging of this file.  Please review the following information to    *
 *   ensure the GNU Lesser General Public License version 2.1 requirements  *
 *   will be met: http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html.   *
 *                                                                          *
 *   This program is distributed in the hope that it will be useful,        *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of         *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the          *
 *   GNU Lesser General Public License for more details.                    *
 ****************************************************************************/

var DefaultMargin = 17
var DefaultFontSize = 22
var DefaultFontFamily = "Nokia Pure Text"
var HtmlFor404Page = "<html><body><h1>=(</h1><h2>Snowshoe says: 404! File not found.</h2><h1>=~</h1></body></html>"
var PrimaryColor = "#3e3e3e"
var SecondaryColor = "#8b8b8b"
var SecondaryFontSize = 20
var InterfaceColor = "#efefef"
var DefaultSwipeLenght = 50
var NavBarLongMargin = 17
var NavBarShortMargin = 8
var NavBarHeight = 105
var OverlayBarLongMargin = 128
var OverlayBarHeight = 64
var StatusBarHeight = 30
var TabBarHeight = 57
var PortraitHeight = 854 - StatusBarHeight
var PortraitWidth = 480
var LandscapeHeight = 854
var LandscapeWidth = 480 - StatusBarHeight

var NavigationPanelYOffset = 24 * 2 + /*BUTTON HEIGHT*/ 56;

// Paged grid constants
// [width, height, horizontalspacing, verticalspacing], the table index refers to the grid size
var PagedGridSizeTable = [192, 286, 16, 16]; // 4 tabs in a grid
var PagedGridItemsPerPage = 4;
var PagedGridNumColumns = 2;
