function truncate(
    str,
    count,
    withEllipsis
) {
<<<<<<< HEAD
    if(str.length<=count)
        return str;
    const substring = str.substring(0,count);
    if(withEllipsis)
        return substring;
    return substring+'...';
}
module.exports={truncate};
=======
    if (str.length <= count) {
        return str;
    }
    const substring = str.substring(0, count);
    if(withEllipsis) 
        return substring;
    return substring + '...';
}
module.exports={truncate}
>>>>>>> 4f4d537355a1bd9495275c921492fc9183acbd9f
