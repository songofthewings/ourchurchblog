<span class="item-categories"><?php echo implode(', ', mk_get_custom_tax(get_the_id(), 'photo_album', true)); ?></span>
<time class="item-date" datetime="<?php the_date('Y-m-d'); ?>"><?php echo get_the_date(); ?></time>