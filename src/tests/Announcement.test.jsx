import { render } from '@testing-library/react';
import Announcement from '../components/Announcement';

/**
 * Testaa Announcement-komponentin toimivuutta.
 */
describe('Announcement component', () => {
  /**
   * Testaa, että ilmoituksen tiedot näytetään oikein.
   */
  it('should render announcement details correctly', () => {
    const announcement = {
      title: 'Test Announcement',
      content: 'This is a test announcement',
      apartment_number: '123',
      expiration_at: '2023-04-30',
    };

    const { getByText } = render(<Announcement announcement={announcement} />);

    expect(getByText(announcement.title)).toBeInTheDocument();
    expect(getByText(announcement.content)).toBeInTheDocument();
    expect(getByText(`Terveisin asunto ${announcement.apartment_number}.`)).toBeInTheDocument();
    expect(getByText(`(voimassa vielä 5 päivää)`)).toBeInTheDocument();
  });
});
