import React from 'react';
import css from './SectionIncluded.module.css';
export default function sectionIncluded() {
  return (
    <div>
      <div>
        <div>
          <div className={css.heading}>
            <h2>
              <span className={css.title}>Included & additional services</span>
            </h2>
          </div>
          <div>
            <div className={css.tile}>
              <div className={css.card}>
                <h3 className={css.cardTitle}>
                  <span style={{ fontSize: '16px', paddingLeft: '10px' }}>
                    Session audio engineer
                  </span>
                </h3>
                <p style={{ paddingLeft: '10px', fontSize: '14px' }}>
                  This studio requires and includes an in-house Engineer in each booking
                </p>
                <p style={{ paddingTop: '30px', fontSize: '14px', paddingLeft: '10px' }}>
                  Included
                </p>
              </div>
            </div>
            <div className={css.tile}>
              <div className={css.card}>
                <h3 className={css.cardTitle}>
                  <span className={css.cardTitlespan}>
                    Mixing and mastering services
                  </span>
                </h3>
                <p className={css.cardContent}>
                  looking for help in mixing and mastering?
                </p>
                <p style={{ paddingTop: '33px', fontSize: '14px' }}>$750.00</p>
              </div>
            </div>
            <p className={css.message}>Have a question about services ask studio</p>
          </div>
        </div>
        <div>
          <div style={{position:'relative',top:'16px'}}>
          <div style={{marginBottom:'34px'}}>
            <div className={css.heading}>
              <h2>
                <span className={css.title}>Details to keep in mind</span>
              </h2>
            </div >
            <div className={css.details} style={{position:'relative',top:'-12px'}}>
            <span >
              Minimum booking: <span  className={css.list}  style={{ paddingLeft: '77px' }}>3 hours </span>
            </span>
            <br />
            <span>
              Max studio occupancy: <span style={{ paddingLeft: '45px' }}>8 People</span>
            </span>{' '}
            <br />
            <span >
              Studio hours:
              <span   className={css.list} style={{ paddingLeft: '119px' }}>Always available 24/7</span>
            </span>{' '}
            <br />
            <span >
              Accept bookings:<span  className={css.list}  style={{ paddingLeft: '90px' }}>Same day accepted</span>{' '}
            </span>{' '}
            <br />
            <span >
              Day rate discount:{' '}
              <span className={css.list} style={{ color: 'var(--marketplaceColor)', paddingLeft: '77px' }}>
                Message studio for more
              </span>
            </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
