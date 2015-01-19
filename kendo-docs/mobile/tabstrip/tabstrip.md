---
title: TabStrip
page_title: General documentation for Kendo UI Mobile Tabstrip widget
description: How to initialize Kendo Mobile TabStrip widget and create custom icons.
---

# TabStrip

The mobile TabStrip widget is used inside a mobile view or layout footer element to display an application-wide group of navigation buttons.
The look of the mobile TabStrip changes depending on the user mobile device and operating system.

## Getting Started

The Kendo mobile Application will automatically initialize the mobile TabStrip for every element with `role` data attribute set to `tabstrip` present in the views/layouts markup.
Alternatively, it can be initialized using jQuery plugin syntax in the mobile View/Layout init event handler. The tabstrip element should contain one or more `a` elements.

## Kendo Mobile Application Integration

The tabs of the TabStrip navigate to the mobile application's views. When the mobile application navigates to another view, it updates the TabStrip's currently selected tab, based on the current view's URL.

### Initialize Kendo mobile TabStrip based on role data attribute.

    <div data-role="tabstrip">
        <a href="#index">Home</a>
        <a href="#featured">Featured</a>
    </div>

## Tab Badges

Every tab can have a badge, which is set using the `badge` data attribute of the Tab's `a` element.

### Setting badges to tabs

    <div data-role="tabstrip">
        <a data-badge="5" href="#index">Home</a>
        <a data-badge="105" href="#featured">Featured</a>
    </div>

## Tab icons

A tab icon can be set in two ways - either by adding an `img` element inside the `a` element, or by setting an `icon` data attribute to the `a` element.
Kendo mobile TabStrip ships with several ready to use icons:

<ul class="icon-block">
    <li><span class="km-icon km-about"></span><br/>about</li>
    <li><span class="km-icon km-action"></span><br/>action</li>
    <li><span class="km-icon km-add"></span><br/>add</li>
    <li><span class="km-icon km-bookmarks"></span><br/>bookmarks</li>
    <li><span class="km-icon km-camera"></span><br/>camera</li>
    <li><span class="km-icon km-cart"></span><br/>cart</li>
    <li><span class="km-icon km-compose"></span><br/>compose</li>
    <li><span class="km-icon km-contacts"></span><br/>contacts</li>
    <li><span class="km-icon km-delete"></span><br/>delete</li>
    <li><span class="km-icon km-details"></span><br/>details</li>
    <li><span class="km-icon km-downloads"></span><br/>downloads</li>
    <li><span class="km-icon km-fastforward"></span><br/>fastforward</li>
    <li><span class="km-icon km-favorites"></span><br/>favorites</li>
    <li><span class="km-icon km-featured"></span><br/>featured</li>
    <li><span class="km-icon km-globe"></span><br/>globe</li>
    <li><span class="km-icon km-history"></span><br/>history</li>
    <li><span class="km-icon km-home"></span><br/>home</li>
    <li><span class="km-icon km-info"></span><br/>info</li>
    <li><span class="km-icon km-more"></span><br/>more</li>
    <li><span class="km-icon km-mostrecent"></span><br/>mostrecent</li>
    <li><span class="km-icon km-mostviewed"></span><br/>mostviewed</li>
    <li><span class="km-icon km-organize"></span><br/>organize</li>
    <li><span class="km-icon km-pause"></span><br/>pause</li>
    <li><span class="km-icon km-play"></span><br/>play</li>
    <li><span class="km-icon km-recents"></span><br/>recents</li>
    <li><span class="km-icon km-refresh"></span><br/>refresh</li>
    <li><span class="km-icon km-reply"></span><br/>reply</li>
    <li><span class="km-icon km-rewind"></span><br/>rewind</li>
    <li><span class="km-icon km-search"></span><br/>search</li>
    <li><span class="km-icon km-settings"></span><br/>settings</li>
    <li><span class="km-icon km-share"></span><br/>share</li>
    <li><span class="km-icon km-sounds"></span><br/>sounds</li>
    <li><span class="km-icon km-stop"></span><br/>stop</li>
    <li><span class="km-icon km-toprated"></span><br/>toprated</li>
    <li><span class="km-icon km-trash"></span><br/>trash</li>
    <li><span class="km-icon km-volume"></span><br/>volume</li>
    <li><span class="km-icon km-wifi"></span><br/>wifi</li>
</ul>

Additional icons may be added by defining the respective CSS tab class.

> **Important:** Check the [Icons](./icons) article for more information and how you can use custom icons in Kendo UI Mobile.
