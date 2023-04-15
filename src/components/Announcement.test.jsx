import { render } from '@testing-library/react';
import Announcement from './Announcement';

describe('Announcement component', () => {
  it('should render announcement details correctly', () => {
    const announcement = {
      title: 'Test Announcement',
      sender: 'Test Sender',
      date: '2023-04-15',
      description: 'This is a test announcement',
      expirationDate: '2023-04-30',
    };

    const getRemainingDays = (expirationDate) => {
      const timeDifference = new Date(expirationDate) - new Date();
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return daysDifference > 0 ? daysDifference : 0;
    };

    const { getByText } = render(
      <Announcement
        announcement={announcement}
        getRemainingDays={getRemainingDays}
      />
    );

    expect(getByText(announcement.title)).toBeInTheDocument();
    expect(getByText(announcement.sender)).toBeInTheDocument();
    expect(getByText(announcement.date)).toBeInTheDocument();
    expect(getByText(announcement.description)).toBeInTheDocument();
    expect(
      getByText(
        `Ilmoitus on voimassa vielä ${getRemainingDays(
          announcement.expirationDate
        )} päivää`
      )
    ).toBeInTheDocument();
  });
});
