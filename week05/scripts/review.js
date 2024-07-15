updateReview()

const p = document.querySelector('#count');
p.textContent = `Total Reviews are : ${getReviews()}`

function updateReview() 
{
    let review_count = getReviews()
    if (review_count == "")
    {
        review_count = 0;
        review_count = review_count + 1;
    }
    else
    {
        review_count = review_count + 1;
    }
    localStorage.setItem('product_reviews', JSON.stringify(review_count));
}

function getReviews() 
{
    return JSON.parse(localStorage.getItem('product_reviews'));
}