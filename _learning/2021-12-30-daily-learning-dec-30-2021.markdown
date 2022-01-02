---
title: Daily Learning Dec 29, 2021
layout: post
topic:
  Gym
category:
  - gym
---
Updated 

## Shoulder    
* Anterior Deltoid (Front Head)
* Medial Deltoid
* Posterior Deltoid (Rear Delt)

## MPS
Muscle protein synthesis (MPS) is a naturally occurring process in which protein and amino acids are produced to repair muscle damage caused by intense exercise.
MPS duration (36 - 48h)

## How to add global scope in laravel application 

In my enrollments table, some enrollments belongs to a orders table. If orders column `operational_status` value is `underwriting_done`, it will be a valid enrollments.       

Global scope applies to all queries performed on a model. 

### Step 1. First we need to make a scope 
~~~php
<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class EnrollmentOrderFilteredScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
      $builder->where(function ($query) {
        $query->whereNull('order_id')
          ->orWhereHas('order', function ($q) {
            $q->whereIn('operational_status', ['underwriting_done']);
          });
      });
    }
}
~~~

### Step 2. Add scope to Model       

~~~php
protected static function boot()
{
  parent::boot();
  static::addGlobalScope(new EnrollmentOrderFilteredScope);
}
~~~









