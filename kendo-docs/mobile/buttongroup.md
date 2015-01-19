---
title: ButtonGroup
page_title: Using jQuery Mobile button group in Kendo UI Mobile
description: Visualize a linear set of grouped buttons in your app by the initialization of Kendo ButtonGroup. Learn how to customize the appearance of the mobile button and set its icons.
position: 4
---

# ButtonGroup

The Kendo mobile ButtonGroup widget presents a linear set of grouped buttons.

## Getting Started

The Kendo mobile Application will automatically initialize a mobile ButtonGroup for every element with `role` data attribute set to `buttongroup`
present in the views/layouts markup. Alternatively, it can be initialized using jQuery plugin syntax in the containing mobile View **init event handler**. The ButtonGroup element should be `UL` element.

### Initialize Kendo mobile ButtonGroup based on role data attribute.

    <ul id="buttongroup" data-role="buttongroup">
        <li>Option 1</li>
        <li>Option 2</li>
    </ul>

### Initialize Kendo mobile ButtonGroup using jQuery plugin syntax

    var buttongroup = $("#buttongroup").kendoMobileButtonGroup();

## Customizing Mobile ButtonGroup Appearance


Every Kendo Mobile ButtonGroup color can be customized by setting the respective `background-color` CSS property inline or with a CSS selector.

### Green Kendo mobile ButtonGroup

    <ul id="buttongroup" data-role="buttongroup">
        <li style="background-color: green">Option1</li>
        <li style="beckground-color: red">Option2</li>
    </ul>

## Button Badges

Every button can have a badge, which is set using the `badge` data attribute of the Button's `li` element.

### Setting badges to ButtonGroup's buttons

    <ul id="buttongroup" data-role="buttongroup">
        <li data-badge="5">Option 1</li>
        <li data-badge="105">Option 2</li>
    </ul>

## Button Icons

A Button icon can be set in two ways - either by adding an `img` element inside the Button `li` element,
or by setting an `icon` data attribute to the Button `li` element.

KendoUI Mobile ships with several ready to use icons:

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

> **Important:** Check the [Icons](./icons) article for more information and how you can use custom icons in Kendo UI Mobile.
