---
title: Daily Learning Jan 03, 2022
layout: post
topic:
  PHP
tags:
category:
  - php
---
## array_intersect     

`array_intersect` compare the values of two arrays, and return the matches    

~~~php
function get_country_type_by_country_code($selected_countries) {

    // getting country type
    $schengen_countries = Helpers::site_meta('schengen_countries');
    $usa_canada_countries = Helpers::site_meta('usa_canada_countries');

    // lowering all countries
    $schengen_countries = array_map('strtolower', $schengen_countries);
    $usa_canada_countries = array_map('strtolower', $usa_canada_countries);
    $selected_countries = array_map('strtolower', $selected_countries);

    // intersecting countries result
    $schengen_countries_intersect = array_intersect($selected_countries, $schengen_countries) ? true : false;
    $usa_canada_countries_intersect = array_intersect($selected_countries, $usa_canada_countries) ? true : false;

    // condition for generating country_type
    $country_type = 'worldwide';
    if ($schengen_countries_intersect && $usa_canada_countries_intersect ) {
      $country_type = 'schengen_us_canada_worldwide';
    } else if ($schengen_countries_intersect) {
      $country_type = 'schengen';
    } else if ($usa_canada_countries_intersect) {
      $country_type = 'usa_canada_worldwide';
    }
    return $country_type;
  }

  // $selected_countries = ['OMN', 'USA'];
  $selected_countries = ['OMN', 'USA', "AUT"];
  // $selected_countries = ['OMN'];
  // $selected_countries = ["AUT", "CAN"];
  $country_type = get_country_type_by_country_code($selected_countries);
  echo $country_type;
~~~

