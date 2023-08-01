const showAnnouncement = false;
const announcementBox = document.querySelector('.announcementBox');
const announcementTextField = document.getElementById('announcement');
const announcementText = "Apple";

if (showAnnouncement) {
    announcementBox.style.display = 'inline-block';
    announcementTextField.innerHTML = announcementText;
} else {
    announcementBox.style.display = 'none';
    announcementTextField.innerHTML = announcementText;
}