---
layout: default
title: 主页
---

# 个人简介
北京大学元培学院在读, 大数据&物理方向~ 

喜欢理论物理 ⚛️、文学 📚、音乐 🎵、徒步 🚶‍♂️、春花 🌸、以及好多好美的东西! 🌟

## 教育
<div class="education">
    <div class="education-item">
        <span class="education-date">2021 - 2023</span>
        <span class="education-description">浙江省温州中学</span>
    </div>
    <div class="education-item">
        <span class="education-date">2024 - 至今</span>
        <span class="education-description">北京大学元培学院</span>
    </div>
</div>

## 笔记
- <a href="{{ '/assets/pdf/sulantihua_public.pdf' | relative_url }}">一份并不简短的物竞笔记(公开版)</a>

## 开发

## 博客
<ul>
{% for post in site.posts %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>