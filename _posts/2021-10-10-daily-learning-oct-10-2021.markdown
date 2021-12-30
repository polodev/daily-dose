---
title: Daily Learning Oct 10, 2021
layout: post
topic:
  Custom key for laravel resource using mapWithKeys.     
  Laravel Collection, Laravel Resource.  
tags:
  - Laravel
category:
  - Programming 
---

Today I have gone through a problem while using laravel collection. My collection required a custom keys for each record.     
I have achieved this by using `mapWithKeys` method 

~~~php
// controller 
public function claim_list()
{
  $claim_items =  ClaimItemResource::collection(ClaimItem::where('is_active', '1')->orderBy('order', 'asc')->get());
  if ($claim_items) {
    $claim_items = $claim_items->mapWithKeys(function($claim_item, $key) {
      if ($claim_item->name) {
        return [$claim_item->name => $claim_item];
      }
      $random_key = 'random-' . rand(100, 1000);
      return [$random_key => $claim_item];
    });

    return Helpers::sendResponse($claim_items, 'Claim List');
  }
  return 'claim item not found';
}
// Resource 
public function toArray($request)
{
  return [
    'id' => $this->id,
    'title' => $this->title,
    'code' => $this->name,
    'image' => $this->image,
  ];
}

~~~
